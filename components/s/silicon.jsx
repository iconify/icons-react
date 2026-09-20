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
		"content": `<style>.yq7ifhdcv {
  fill: var(--svg-color--007aff, #007aff);
  d: path("M3 16.5V21c4.163 0 7.967-2.282 9.927-5.956l2.117-3.971A6.74 6.74 0 0 1 21 7.5V3a11.23 11.23 0 0 0-9.927 5.956l-2.117 3.971A6.74 6.74 0 0 1 3 16.5m13.5 0H21V21h-4.5z");
}
</style><path class="yq7ifhdcv"/>`,
		"fallback": "token-branded:silicon",
	});
}

export default Component;
