import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/m/m-nuw3bni.css';
import '../../css/p/pirkdkbpw.css';
import '../../css/c/cg3sp7bpj.css';
import '../../css/u/u4w82dlzp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="m-nuw3bni"/><path class="pirkdkbpw"/><path class="cg3sp7bpj"/><path class="u4w82dlzp"/></g>`,
		"fallback": "streamline-logos:ubisoft-logo",
	});
}

export default Component;
