import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/w/w34bfwbzs.css';
import '../../css/s/s39phnkpe.css';
import '../../css/t/t5ok4fbuh.css';
import '../../css/f/fjt16qbnj.css';
import '../../css/e/eee7vnjin.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><path class="w34bfwbzs"/><path class="s39phnkpe"/><path class="t5ok4fbuh"/><path clip-rule="evenodd" class="fjt16qbnj"/><path clip-rule="evenodd" class="eee7vnjin"/></g>`,
		"fallback": "icon-park:three-d-glasses",
	});
}

export default Component;
