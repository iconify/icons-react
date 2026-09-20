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
		"content": `<style>.s39qlqbvb {
  fill: currentColor;
  d: path("M5 16.2V7.8l6 4.2zm8-.2V8h2v8zm4 0V8h2v8z");
}
</style><path class="s39qlqbvb"/>`,
		"fallback": "material-symbols:play-pause-outline",
	});
}

export default Component;
