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
		"content": `<style>.wod12vsdo {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M19.75 1.75H4.25q-1.036 0-1.768.732T1.75 4.25v1.5q0 1.036.732 1.768q.549.548 1.268.686V20.75H2.5q-.074 0-.146.014q-.073.015-.141.043t-.13.069t-.113.094q-.053.052-.094.113t-.069.13t-.043.141t-.014.146t.014.146q.015.073.043.141t.069.13q.041.061.094.113q.052.053.113.094t.13.069t.141.043t.146.014h19q.074 0 .146-.014q.073-.015.141-.043t.13-.069q.061-.041.113-.094q.053-.052.094-.113t.069-.13t.043-.141t.014-.146q0-.074-.014-.146q-.015-.073-.043-.141t-.069-.13q-.041-.061-.094-.113q-.052-.053-.113-.094t-.13-.069t-.141-.043t-.146-.014h-1.25V8.204q.719-.138 1.268-.686q.732-.732.732-1.768v-1.5q0-1.036-.732-1.768T19.75 1.75m-1 15.5H5.25v-2h13.5zm-13.5 1.5h13.5v2H5.25zm13.5-8.5H5.25v-2h13.5zm-13.5 3.5v-2h13.5v2z");
}
</style><path class="wod12vsdo"/>`,
		"fallback": "uix-solid:roller-shutter-closed",
	});
}

export default Component;
