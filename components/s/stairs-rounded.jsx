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
		"content": `<style>.xcwzh1bxi {
  fill: currentColor;
  d: path("M9.925 14.175H12q.213 0 .356-.144t.144-.356V10.85h2.075q.213 0 .356-.144t.144-.356V7.5H17q.213 0 .356-.144t.144-.357t-.144-.356T17 6.5h-2.425q-.213 0-.356.144T14.075 7v2.825H12q-.213 0-.356.144t-.144.356v2.825H9.425q-.213 0-.356.144t-.144.356v2.85H7q-.212 0-.356.144t-.144.357t.144.356T7 17.5h2.425q.213 0 .356-.144T9.925 17zM5.615 20q-.69 0-1.152-.462T4 18.384V5.616q0-.691.463-1.153T5.616 4h12.769q.69 0 1.153.463T20 5.616v12.769q0 .69-.462 1.153T18.384 20z");
}
</style><path class="xcwzh1bxi"/>`,
		"fallback": "material-symbols-light:stairs-rounded",
	});
}

export default Component;
