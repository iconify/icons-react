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
		"content": `<style>.f_p8p_bnv {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("m15.005 4.445l4.55 4.55Q20.8 10.239 20.8 12t-1.245 3.005l-4.55 4.55Q13.761 20.8 12 20.8t-3.005-1.245l-4.55-4.55Q3.2 13.761 3.2 12t1.245-3.005l4.55-4.55Q10.239 3.2 12 3.2t3.005 1.245M12 9.75H8q-.074 0-.146.014q-.073.015-.141.043t-.13.069q-.061.041-.113.094q-.053.052-.094.113t-.069.13t-.043.141t-.014.146t.014.146q.015.073.043.141t.069.13t.094.113q.052.053.113.094t.13.069t.141.043t.146.014h3.25v5.25q0 .074.014.146q.015.073.043.141t.069.13q.041.061.094.113q.052.053.113.094t.13.069t.141.043t.146.014t.146-.014q.073-.015.141-.043t.13-.069t.113-.094q.053-.052.094-.113t.069-.13t.043-.141t.014-.146v-5.25H16q.074 0 .146-.014q.073-.015.141-.043t.13-.069q.061-.041.113-.094q.053-.052.094-.113t.069-.13t.043-.141t.014-.146t-.014-.146q-.015-.073-.043-.141t-.069-.13t-.094-.113q-.052-.053-.113-.094t-.13-.069t-.141-.043T16 9.75z");
}
</style><path class="f_p8p_bnv"/>`,
		"fallback": "uix-solid:t-junction-sign",
	});
}

export default Component;
