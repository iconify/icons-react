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
		"content": `<style>.zcb12njge {
  fill: currentColor;
  d: path("M18.077 12.692q.385 0 .654-.269t.269-.654V7.923q0-.384-.27-.654T18.078 7h-6.27q-.212 0-.355.144t-.144.357t.144.356t.356.143H18v3.692h-2.346q-.213 0-.356.144t-.144.357t.148.356t.358.143zm2.427 5.039q-.187 0-.345-.13q-.159-.13-.159-.376V6.615q0-.269-.173-.442T19.385 6H8.775q-.25 0-.375-.155t-.125-.341t.125-.345T8.775 5h10.61q.69 0 1.153.463T21 6.616V17.23q0 .25-.155.375t-.341.125m.246 4.44L17.573 19H4.616q-.691 0-1.153-.462T3 17.384V6.616q0-.691.463-1.153T4.615 5H5l1 1H4.616q-.231 0-.424.192T4 6.616v10.769q0 .23.192.423t.423.192h11.958L2.235 3.662q-.146-.146-.156-.347t.156-.367t.356-.165t.357.165l18.516 18.516q.146.146.155.344t-.155.363t-.357.165t-.357-.165");
}
</style><path class="zcb12njge"/>`,
		"fallback": "material-symbols-light:picture-in-picture-off-outline-rounded",
	});
}

export default Component;
