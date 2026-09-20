import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.v0keepb9s {
  fill: currentColor;
  d: path("m238.16 113.89l-96-96a20 20 0 0 0-28.22 0l-96 96.05a20 20 0 0 0 0 28.22l96.05 96a20 20 0 0 0 28.22 0l96-96a20 20 0 0 0 0-28.22ZM128 37.68L174.32 84H160a12 12 0 0 0-8.49 3.51L128 111l-23.51-23.49A12 12 0 0 0 96 84H81.68ZM57.68 108H91l20 20l-20 20H57.68l-20-20ZM128 218.32L81.68 172H96a12 12 0 0 0 8.49-3.51L128 145l23.51 23.52A12 12 0 0 0 160 172h14.32ZM198.32 148H165l-20-20l20-20h33.35l20 20Z");
}
</style><path class="v0keepb9s"/>`,
		"fallback": "ph:pix-logo-bold",
	});
}

export default Component;
