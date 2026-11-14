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
		"content": `<style>.xhwp6iway {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M11.52 22.076q-.317-.264-1.031-.845Q2.75 14.929 2.75 11q.001-3.831 2.71-6.539T12 1.753t6.54 2.708T21.25 11q0 3.929-7.739 10.231q-.714.581-1.031.845q-.05.042-.107.074q-.056.033-.118.055t-.125.034q-.065.011-.13.011t-.13-.011q-.064-.012-.125-.034q-.062-.022-.118-.055q-.057-.032-.107-.074M10 7.75H7.5q-.074 0-.146.014q-.073.015-.141.043t-.13.069q-.061.041-.113.094q-.053.052-.094.113t-.069.13t-.043.141t-.014.146v6q0 .074.014.146q.015.073.043.141t.069.13t.094.113q.052.053.113.094t.13.069t.141.043t.146.014h8q1.688 0 1.688-1.812q0-1.571-1.409-2.134l-.042-.016l-4.205-1.401l-.318-.637h.536q.074 0 .146-.014q.073-.015.141-.043t.13-.069t.113-.094q.053-.052.094-.113t.069-.13t.043-.141t.014-.146t-.014-.146q-.015-.073-.043-.141t-.069-.13t-.094-.113q-.052-.053-.113-.094t-.13-.069t-.141-.043t-.146-.014h-1q-.201 0-.375.1q-.174-.1-.375-.1");
}
</style><path class="xhwp6iway"/>`,
		"fallback": "uix-solid:pin-shoe",
	});
}

export default Component;
