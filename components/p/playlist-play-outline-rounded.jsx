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
		"content": `<style>.clcv8cclz {
  fill: currentColor;
  d: path("M4.5 15.77q-.213 0-.356-.145T4 15.27t.144-.356t.356-.144h6.02q.212 0 .356.144q.143.144.143.357t-.144.356t-.356.143zm0-4q-.213 0-.356-.145T4 11.27t.144-.356t.356-.144h9.962q.212 0 .356.144t.144.357t-.144.356t-.356.143zm0-4q-.213 0-.356-.145T4 7.27t.144-.356t.356-.144h9.962q.212 0 .356.144t.144.357t-.144.356t-.356.143zm12.564 11.82q-.106.056-.202.066t-.202-.04t-.162-.134t-.056-.215V14.81q0-.127.056-.223t.161-.145t.202-.04t.202.065l3.428 2.223q.103.062.145.155t.041.196t-.041.194q-.042.091-.145.152z");
}
</style><path class="clcv8cclz"/>`,
		"fallback": "material-symbols-light:playlist-play-outline-rounded",
	});
}

export default Component;
