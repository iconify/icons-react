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
		"content": `<style>.b_li9wect {
  fill: currentColor;
  d: path("M19.9 6.5q-1.938-1.585-3.906-2.36t-4.052-.775q-2.419 0-4.451.95q-2.033.948-3.254 2.616q-.143.196-.33.325t-.434.128q-.165 0-.241-.166t.03-.331q1.184-2.018 3.517-3.212t5.163-1.194q2.139 0 4.16.746t4.013 2.279V3.442q0-.19.126-.316T20.558 3t.316.126t.126.316v3.135q0 .348-.23.578t-.578.23h-3.134q-.19 0-.317-.126q-.126-.126-.126-.317q0-.19.126-.316t.317-.126zM11.825 21q-.504 0-.948-.186t-.812-.554L5.59 15.796q-.18-.179-.182-.447t.195-.453l.017-.017q.227-.208.515-.268q.287-.061.581.012l2.785.687V7q0-.213.143-.357T10 6.5t.357.143T10.5 7v7.27h1.827V10.5q0-.213.143-.357t.357-.143t.357.143t.143.357v3.77h1.846V11.5q0-.213.143-.357t.357-.143t.357.143t.143.357v2.77H18v-.77q0-.213.143-.357T18.5 13t.357.143t.143.357v4q0 1.458-1.021 2.479T15.5 21z");
}
</style><path class="b_li9wect"/>`,
		"fallback": "material-symbols-light:swipe-right-rounded",
	});
}

export default Component;
