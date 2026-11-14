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
		"content": `<style>.s8jecq5xq {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M15.202 2.028q5.293 1.477 6.77 6.77q.04.144.023.292t-.092.278q-.073.13-.19.222t-.261.132q-.099.028-.202.028H15q-.074 0-.146-.014q-.073-.015-.141-.043t-.13-.069t-.113-.094q-.053-.052-.094-.113t-.069-.13t-.043-.141T14.25 9V2.75q0-.074.014-.146q.015-.073.043-.141t.069-.13t.094-.113q.052-.053.113-.094t.13-.069t.141-.043Q14.926 2 15 2q.103 0 .202.028M12.75 3.5q0-.074-.014-.146q-.015-.073-.043-.141t-.069-.13t-.094-.113q-.052-.053-.113-.094t-.13-.069t-.141-.043Q12.074 2.75 12 2.75q-3.831 0-6.541 2.709Q2.75 8.169 2.75 12t2.709 6.541Q8.169 21.25 12 21.25t6.541-2.709Q21.25 15.831 21.25 12q0-.074-.014-.146q-.015-.073-.043-.141t-.069-.13t-.094-.113q-.052-.053-.113-.094t-.13-.069t-.141-.043t-.146-.014h-7.75z");
}
</style><path class="s8jecq5xq"/>`,
		"fallback": "uix-solid:pie-chart-class",
	});
}

export default Component;
