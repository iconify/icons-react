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
		"content": `<style>.ojnhl540q {
  fill: currentColor;
  d: path("M10.81 2.34a2.25 2.25 0 0 1 2.38 0l7.75 4.833q.116.072.221.157L12 12.15L2.834 7.333q.107-.085.225-.16zM2.048 8.614A2.3 2.3 0 0 0 2 9.082v7.668A3.25 3.25 0 0 0 5.25 20h13.5A3.25 3.25 0 0 0 22 16.75V9.082q0-.241-.05-.472l-9.6 5.05a.75.75 0 0 1-.699.001z");
}
</style><path class="ojnhl540q"/>`,
		"fallback": "fluent:mail-read-24-filled",
	});
}

export default Component;
