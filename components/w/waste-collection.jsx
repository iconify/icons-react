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
		"content": `<style>.kbeqafzwk {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M18.75 2.75H5.25q-1.036 0-1.768.732T2.75 5.25q0 2.167 1.878 2.456q-.27.574-.21 1.261l.696 8q.059.68.304 1.157Q5 18.728 5 19.75q0 2.5 2.5 2.5q1.036 0 1.768-.732T10 19.75q0-.26-.046-.5h4.074q-.028.236-.028.5q0 2.5 2.5 2.5t2.5-2.5q0-1.022-.418-1.626q.245-.477.304-1.157l.696-8q.06-.687-.21-1.261q1.878-.289 1.878-2.456q0-1.036-.732-1.768T18.75 2.75m-6 12.75q0 .074-.014.146q-.015.073-.043.141t-.069.13t-.094.113q-.052.053-.113.094t-.13.069t-.141.043t-.146.014t-.146-.014q-.073-.015-.141-.043t-.13-.069t-.113-.094q-.053-.052-.094-.113t-.069-.13t-.043-.141t-.014-.146V10q0-.074.014-.146q.015-.073.043-.141t.069-.13t.094-.113q.052-.053.113-.094t.13-.069t.141-.043T12 9.25t.146.014q.073.015.141.043t.13.069t.113.094q.053.052.094.113t.069.13t.043.141t.014.146z");
}
</style><path class="kbeqafzwk"/>`,
		"fallback": "uix-solid:waste-collection",
	});
}

export default Component;
