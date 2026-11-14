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
		"content": `<style>.zeafc-bnp {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("m3.149 6.837l8.5-4.5q.081-.043.17-.065T12 2.25t.181.022t.17.065l8.499 4.5q-.081-.043-.17-.065t-.18-.022q-.092 0-.181.022t-.17.065L12 11.151L3.851 6.837q-.081-.043-.17-.065T3.5 6.75t-.181.022t-.17.065m18.068.884q.033-.108.033-.22V16.5q0 .102-.027.201q-.028.098-.08.186q-.053.087-.127.158q-.075.07-.165.118l-8.5 4.5q.09-.048.165-.118q.074-.071.127-.158q.052-.088.08-.186q.027-.099.027-.201v-8.548l8.101-4.289q.132-.07.227-.185t.139-.257m-9.967 4.731L3.149 8.163q-.09-.048-.165-.118q-.074-.071-.127-.158q-.052-.088-.08-.186q-.027-.099-.027-.201v9q0 .102.027.201q.028.098.08.186q.053.087.127.158q.075.07.165.118l8.5 4.5q-.09-.048-.165-.118q-.074-.071-.127-.158q-.052-.088-.08-.186q-.027-.099-.027-.201z");
}
</style><path class="zeafc-bnp"/>`,
		"fallback": "uix-solid:product-3d",
	});
}

export default Component;
