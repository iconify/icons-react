import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k8i38w45s.css';
import '../../css/t/tczw_hbsg.css';
import '../../css/i/ig162ubki.css';
import '../../css/o/oc9ladccx.css';
import '../../css/b/bth3c9bbc.css';
import '../../css/m/m4nc7fbiz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGXYgSGd1Z" class="k8i38w45s"/></defs><g class="tczw_hbsg"><use href="#SVGXYgSGd1Z" class="ig162ubki wm-k"/><path class="oc9ladccx wm-k"/><use href="#SVGXYgSGd1Z" class="wm-k"/><path class="bth3c9bbc wm-k"/><path class="m4nc7fbiz wm-a"/></g>`,
		"fallback": "withicons:paintbrush-sketch",
	});
}

export default Component;
