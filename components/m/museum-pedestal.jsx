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
		"content": `<style>.odm92ttuo {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M10.5 2.25h3q.074 0 .146.014q.073.015.141.043t.13.069t.113.094q.053.052.094.113t.069.13t.043.141t.014.146v.554q2.5 1.47 2.5 4.446q0 1.042-.488 1.75H17q1.75 0 1.75 1.75T17 13.25h-.25v5q2 0 2 2t-2 2h-9.5q-2 0-2-2t2-2v-5H7q-1.75 0-1.75-1.75T7 9.75h.738Q7.25 9.042 7.25 8q0-2.976 2.5-4.446V3q0-.074.014-.146q.015-.073.043-.141t.069-.13t.094-.113q.052-.053.113-.094t.13-.069t.141-.043q.072-.014.146-.014m4.75 11v5h-6.5v-5z");
}
</style><path class="odm92ttuo"/>`,
		"fallback": "uix-solid:museum-pedestal",
	});
}

export default Component;
