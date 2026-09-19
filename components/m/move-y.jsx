import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/mia96ztce.css';
import '../../css/e/e5igkrbgq.css';
import '../../css/r/rum7tqgct.css';
import '../../css/c/cvn0a4b9a.css';
import '../../css/k/k-fhzb54s.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="mia96ztce"/><path class="e5igkrbgq"/><path class="rum7tqgct"/><path class="cvn0a4b9a"/><path class="k-fhzb54s"/></g>`,
		"fallback": "pepicons:move-y",
	});
}

export default Component;
