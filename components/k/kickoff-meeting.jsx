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
		"content": `<style>.j183z9_9w {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M20.5 21.25h-17q-.074 0-.146-.014q-.073-.015-.141-.043t-.13-.069t-.113-.094q-.053-.052-.094-.113t-.069-.13t-.043-.141t-.014-.146t.014-.146q.015-.073.043-.141t.069-.13q.041-.061.094-.113q.052-.053.113-.094t.13-.069t.141-.043t.146-.014h2.75V3q0-.074.014-.146q.015-.073.043-.141t.069-.13t.094-.113q.052-.053.113-.094t.13-.069t.141-.043Q6.926 2.25 7 2.25q.072 0 .144.014q.071.014.138.041t.128.067q.06.039.112.09t.094.11t.07.125t.045.137t.019.143l11.01 4.07q.14.051.249.153q.11.101.172.236q.063.136.068.285t-.046.289q-.056.154-.173.27t-.27.173L7.75 12.522v7.228H20.5q.074 0 .146.014q.073.015.141.043t.13.069q.061.041.113.094q.053.052.094.113t.069.13t.043.141t.014.146q0 .074-.014.146q-.015.073-.043.141t-.069.13q-.041.061-.094.113q-.052.053-.113.094t-.13.069t-.141.043t-.146.014M7.75 10.923l8.586-3.173L7.75 4.577z");
}
</style><path class="j183z9_9w"/>`,
		"fallback": "uix-solid:kickoff-meeting",
	});
}

export default Component;
