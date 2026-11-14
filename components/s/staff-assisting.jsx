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
		"content": `<style>.mwskptbmi {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M15.5 3.25h5q1.75 0 1.75 1.75v4.5q0 1.75-1.75 1.75h-3.237l-2.294 1.836q-.058.046-.124.08q-.065.034-.136.054q-.071.021-.145.027q-.073.007-.147-.002q-.073-.008-.144-.03t-.135-.058t-.121-.083t-.103-.105q-.079-.1-.122-.221q-.042-.12-.042-.248V5q0-1.75 1.75-1.75M4 8q0-1.864 1.318-3.182T8.5 3.5t3.182 1.318T13 8t-1.318 3.182T8.5 12.5t-3.182-1.318T4 8m4.5 6.25q-6.75 0-6.75 6.75q0 .074.014.146q.015.073.043.141t.069.13q.041.061.094.113q.052.053.113.094t.13.069t.141.043t.146.014t.146-.014q.073-.015.141-.043t.13-.069t.113-.094q.053-.052.094-.113t.069-.13t.043-.141T3.25 21q0-5.25 5.25-5.25T13.75 21q0 .074.014.146q.015.073.043.141t.069.13q.041.061.094.113q.052.053.113.094t.13.069t.141.043t.146.014t.146-.014q.073-.015.141-.043t.13-.069t.113-.094q.053-.052.094-.113t.069-.13t.043-.141t.014-.146q0-6.75-6.75-6.75");
}
</style><path class="mwskptbmi"/>`,
		"fallback": "uix-solid:staff-assisting",
	});
}

export default Component;
