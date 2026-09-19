import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/y/yhra9igpf.css';
import '../../css/w/w66dbmb4n.css';
import '../../css/y/yxx8ictdt.css';
import '../../css/m/mlg7_-bzu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><path class="yhra9igpf"/><path class="w66dbmb4n"/><path class="yxx8ictdt"/><path class="mlg7_-bzu"/></g>`,
		"fallback": "akar-icons:rock-on",
	});
}

export default Component;
