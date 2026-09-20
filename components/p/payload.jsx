import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":305};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.wu0mdxd7o {
  d: path("M116.204 0L256 84.031v159.5l-105.265 60.896v-159.5L10.772 61.008zM105.49 171.121v124.463L0 232.13z");
}
</style><path class="wu0mdxd7o"/>`,
		"fallback": "logos:payload",
	});
}

export default Component;
