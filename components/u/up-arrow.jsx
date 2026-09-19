import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.pk421hkpq {
  fill: var(--svg-color--fff, #fff);
  d: path("M15.937 28.09L31.795 9.578l15.938 18.334c-.191 2.574-1.894 4.593-3.981 4.603l-3.54.018l.09 16.704c.012 2.81-2.245 5.1-5.04 5.117l-6.574.034c-2.798.012-5.079-2.256-5.092-5.065l-.088-16.7l-3.538.02c-2.086.007-3.808-1.985-4.03-4.553");
}

.z3y2-xsyy {
  fill: var(--svg-color--1b75bb, #1b75bb);
  d: path("M63.667 57.064c0 3.812-3.07 6.9-6.86 6.9H6.86c-3.788 0-6.86-3.088-6.86-6.9V6.896C0 3.088 3.072 0 6.86 0h49.946c3.79 0 6.86 3.088 6.86 6.896v50.168z");
}
</style><path class="z3y2-xsyy"/><path class="pk421hkpq"/>`,
		"fallback": "emojione-v1:up-arrow",
	});
}

export default Component;
