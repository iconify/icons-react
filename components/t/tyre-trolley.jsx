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
		"content": `<style>.itmz_ibxm {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M5.5 9.5q0-2.692 1.904-4.596T12 3t4.596 1.904T18.5 9.5t-1.904 4.596q-.214.214-.438.404H21.5q.074 0 .146.014q.073.015.141.043t.13.069q.061.041.113.094q.053.052.094.113t.069.13t.043.141t.014.146t-.014.146q-.015.073-.043.141t-.069.13t-.094.113q-.052.053-.113.094t-.13.069t-.141.043T21.5 16h-.438q.188.531.188 1.25q0 2.75-2.75 2.75t-2.75-2.75q0-.719.188-1.25H8.062q.188.531.188 1.25Q8.25 20 5.5 20t-2.75-2.75q0-.719.188-1.25H2.5q-.074 0-.146-.014q-.073-.015-.141-.043t-.13-.069t-.113-.094q-.053-.052-.094-.113t-.069-.13t-.043-.141q-.014-.072-.014-.146V9q0-.074.014-.146q.015-.073.043-.141t.069-.13t.094-.113q.052-.053.113-.094t.13-.069t.141-.043t.146-.014t.146.014q.073.015.141.043t.13.069t.113.094q.053.052.094.113t.069.13t.043.141q.014.072.014.146v5.5h4.592q-.224-.19-.438-.404Q5.5 12.192 5.5 9.5m3.25 0q0-3.25 3.25-3.25t3.25 3.25T12 12.75T8.75 9.5");
}
</style><path class="itmz_ibxm"/>`,
		"fallback": "uix-solid:tyre-trolley",
	});
}

export default Component;
