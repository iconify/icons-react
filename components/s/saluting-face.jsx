import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x4u8pbwjc.css';
import '../../css/r/rpyiehb8i.css';
import '../../css/y/yj24btrqj.css';
import '../../css/j/j5xjwdbmw.css';
import '../../css/r/r0pcc319q.css';
import '../../css/w/w7xrym38c.css';
import '../../css/g/goecptbzp.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="x4u8pbwjc"><path class="rpyiehb8i"/><path class="yj24btrqj"/></g><path class="j5xjwdbmw"/><path class="r0pcc319q"/><path class="w7xrym38c"/><path class="goecptbzp"/>`,
		"fallback": "openmoji:saluting-face",
	});
}

export default Component;
