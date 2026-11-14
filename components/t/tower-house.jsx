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
		"content": `<style>.s16hrubqp {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("m13.843 3.4l3.75 4.091q.657.717.657 1.69V19.75q0 1.036-.732 1.768t-1.768.732H13.5q.074 0 .146-.014q.073-.015.141-.043t.13-.069t.113-.094q.053-.052.094-.113t.069-.13t.043-.141t.014-.146V18q0-2.25-2.25-2.25T9.75 18v3.5q0 .074.014.146q.015.073.043.141t.069.13q.041.061.094.113q.052.053.113.094t.13.069t.141.043t.146.014H8.25q-1.036 0-1.768-.732T5.75 19.75V9.181q0-.973.657-1.69l3.75-4.091Q10.9 2.59 12 2.59t1.843.81M10.5 22.25q.074 0 .146-.014q.073-.015.141-.043t.13-.069t.113-.094q.053-.052.094-.113t.069-.13t.043-.141t.014-.146V18q0-.75.75-.75t.75.75v3.5q0 .074.014.146q.015.073.043.141t.069.13q.041.061.094.113q.052.053.113.094t.13.069t.141.043t.146.014zM14.25 12q0-2.25-2.25-2.25T9.75 12T12 14.25T14.25 12");
}
</style><path class="s16hrubqp"/>`,
		"fallback": "uix-solid:tower-house",
	});
}

export default Component;
