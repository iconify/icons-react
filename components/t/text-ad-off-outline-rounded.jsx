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
		"content": `<style>.svyrjgbpr {
  fill: currentColor;
  d: path("M20.504 17.73q-.187 0-.345-.129q-.159-.13-.159-.376V6.615q0-.269-.173-.442T19.385 6H8.775q-.25 0-.375-.155t-.125-.341t.125-.345T8.775 5h10.61q.69 0 1.153.463T21 6.616V17.23q0 .25-.155.375t-.341.125m.246 4.44L17.573 19H4.616q-.691 0-1.153-.462T3 17.384V6.616q0-.691.463-1.153T4.615 5H5l1 1H4.616q-.231 0-.424.192T4 6.616v10.769q0 .23.192.423t.423.192h11.958L2.235 3.662q-.146-.146-.156-.347t.156-.367t.356-.165t.357.165l18.516 18.516q.146.146.155.344t-.155.363t-.357.165t-.357-.165m-4.865-6.286H6.23q-.213 0-.356-.144q-.144-.144-.144-.357t.144-.356t.356-.144h8.654zM12.5 12.5H6.23q-.212 0-.355-.144t-.144-.357t.144-.356t.356-.143H11.5zM9.116 9.116H6.23q-.213 0-.356-.144t-.144-.357t.144-.356t.356-.143h1.885zm8.653 3.384q.213 0 .357-.144t.143-.357t-.143-.356t-.357-.143h-2.244q-.25 0-.375.155t-.125.342t.125.344t.375.159zM14 9.116q.213 0 .356-.144t.144-.357t-.144-.356T14 8.116h-1.86q-.25 0-.375.155t-.125.341t.125.345t.375.158z");
}
</style><path class="svyrjgbpr"/>`,
		"fallback": "material-symbols-light:text-ad-off-outline-rounded",
	});
}

export default Component;
