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
		"content": `<style>.zw3r2zbxc {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M5.25 5q0 1.243.878 2.122q.424.424.933.644L3.443 19.75H2.5q-.074 0-.146.014q-.073.015-.141.043t-.13.069t-.113.094q-.053.052-.094.113t-.069.13t-.043.141t-.014.146t.014.146q.015.073.043.141t.069.13q.041.061.094.113q.052.053.113.094t.13.069t.141.043t.146.014h19q.074 0 .146-.014q.073-.015.141-.043t.13-.069q.061-.041.113-.094q.053-.052.094-.113t.069-.13t.043-.141t.014-.146q0-.074-.014-.146q-.015-.073-.043-.141t-.069-.13q-.041-.061-.094-.113q-.052-.053-.113-.094t-.13-.069t-.141-.043t-.146-.014h-.943L16.963 7.844Q18.75 7.316 18.75 5q0-3-3-3t-3 3q0 .879.257 1.5h-2.15q.393-.669.393-1.5q.001-1.243-.878-2.122T8.25 1.999t-2.122.879T5.25 5m13.74 14.75l-1.509-5H12.75v5zm-7.74 0v-5H6.519l-1.509 5zm0-6.5H6.972L8.557 8h2.693zm5.778 0H12.75V8h2.693z");
}
</style><path class="zw3r2zbxc"/>`,
		"fallback": "uix-solid:mine-headframe",
	});
}

export default Component;
