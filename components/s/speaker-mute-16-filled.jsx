import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ff-_6ub2x {
  fill: currentColor;
  d: path("M9 2.5a.5.5 0 0 0-.849-.358l-2.927 2.85H3.5a1.5 1.5 0 0 0-1.5 1.5v2.99a1.5 1.5 0 0 0 1.5 1.5h1.723l2.927 2.875A.5.5 0 0 0 9 13.5zm1.147 3.646a.5.5 0 0 1 .707 0l1.147 1.147l1.146-1.147a.5.5 0 1 1 .707.708L12.708 8l1.146 1.146a.5.5 0 1 1-.707.708L12 8.707l-1.147 1.147a.5.5 0 0 1-.707-.708L11.293 8l-1.146-1.146a.5.5 0 0 1 0-.708");
}
</style><path class="ff-_6ub2x"/>`,
		"fallback": "fluent:speaker-mute-16-filled",
	});
}

export default Component;
