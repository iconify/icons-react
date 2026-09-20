import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.v_xcp9bbl {
  fill: currentColor;
  d: path("M8 16.77q-.31 0-.54-.221q-.23-.22-.23-.549q0-.31.23-.54t.54-.23h8q.31 0 .54.221q.23.22.23.549q0 .31-.23.54t-.54.23zM3.46 8.54q-.23-.23-.23-.54t.23-.54t.54-.23t.54.23t.23.54t-.23.54t-.54.23t-.54-.23m4 0q-.23-.23-.23-.54t.23-.54t.54-.23t.54.23t.23.54t-.23.54t-.54.23t-.54-.23m4 0q-.23-.23-.23-.54t.23-.54t.54-.23t.54.23t.23.54t-.23.54t-.54.23t-.54-.23m4 0q-.23-.23-.23-.54t.23-.54t.54-.23t.54.23t.23.54t-.23.54t-.54.23t-.54-.23m4 0q-.23-.23-.23-.54t.23-.54t.54-.23t.54.23t.23.54t-.23.54t-.54.23t-.54-.23m0 4q-.23-.23-.23-.54t.23-.54t.54-.23t.54.23t.23.54t-.23.54t-.54.23t-.54-.23m-4 0q-.23-.23-.23-.54t.23-.54t.54-.23t.54.23t.23.54t-.23.54t-.54.23t-.54-.23m-4 0q-.23-.23-.23-.54t.23-.54t.54-.23t.54.23t.23.54t-.23.54t-.54.23t-.54-.23m-4 0q-.23-.23-.23-.54t.23-.54t.54-.23t.54.23t.23.54t-.23.54t-.54.23t-.54-.23m-4 0q-.23-.23-.23-.54t.23-.54t.54-.23t.54.23t.23.54t-.23.54t-.54.23t-.54-.23");
}
</style><path class="v_xcp9bbl"/>`,
		"fallback": "material-symbols-light:keyboard-keys-outline-rounded",
	});
}

export default Component;
