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
		"content": `<style>.nu12t2f-f {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M8.641 5.141Q7.25 6.532 7.25 8.5q0 1.241.554 2.254q-1.841.066-3.163 1.387Q3.25 13.532 3.25 15.5q0 1.891 1.285 3.25H2.5q-.074 0-.146.014q-.073.015-.141.043t-.13.069t-.113.094q-.053.052-.094.113t-.069.13t-.043.141t-.014.146t.014.146q.015.073.043.141t.069.13q.041.061.094.113q.052.053.113.094t.13.069t.141.043t.146.014h19q.074 0 .146-.014q.073-.015.141-.043t.13-.069q.061-.041.113-.094q.053-.052.094-.113t.069-.13t.043-.141t.014-.146q0-.074-.014-.146q-.015-.073-.043-.141t-.069-.13q-.041-.061-.094-.113q-.052-.053-.113-.094t-.13-.069t-.141-.043t-.146-.014h-2.035q1.285-1.359 1.285-3.25q0-1.968-1.391-3.359q-1.322-1.321-3.163-1.387q.554-1.013.554-2.254q0-1.968-1.391-3.359T12 3.75T8.641 5.141m3.894 13.609q-.303-.321-.535-.671q-.232.35-.535.671z");
}
</style><path class="nu12t2f-f"/>`,
		"fallback": "uix-solid:metal-pellets",
	});
}

export default Component;
