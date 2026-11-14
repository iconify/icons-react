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
		"content": `<style>.q5ukqtl8z {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M8.5 5.5Q8.5 2 12 2t3.5 3.5q0 2.092-1.25 2.933v2.817h4q2.5 0 2.5 2.5v1q0 2.5-2.5 2.5H5.75q-2.5 0-2.5-2.5v-1q0-2.5 2.5-2.5h4V8.433Q8.5 7.592 8.5 5.5M12 9q-.398 0-.75-.045v2.295h1.5V8.955Q12.398 9 12 9m8.75 11q0-.074-.014-.146q-.015-.073-.043-.141t-.069-.13q-.041-.061-.094-.113q-.052-.053-.113-.094t-.13-.069t-.141-.043T20 19.25H4q-.074 0-.146.014q-.073.015-.141.043t-.13.069t-.113.094q-.053.052-.094.113t-.069.13t-.043.141T3.25 20t.014.146q.015.073.043.141t.069.13q.041.061.094.113q.052.053.113.094t.13.069t.141.043t.146.014h16q.074 0 .146-.014q.073-.015.141-.043t.13-.069q.061-.041.113-.094q.053-.052.094-.113t.069-.13t.043-.141t.014-.146");
}
</style><path class="q5ukqtl8z"/>`,
		"fallback": "uix-solid:pin-customs",
	});
}

export default Component;
