import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ofr8dabpo.css';
import '../../css/j/jxzu-gb9u.css';
import '../../css/x/xgg_bxbzd.css';
import '../../css/n/n320lnlxo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ofr8dabpo wm-a"/><path class="jxzu-gb9u wm-k"/><path class="wm-k xgg_bxbzd"/><path class="n320lnlxo wm-k"/>`,
		"fallback": "withicons-bauhaus:syringe",
	});
}

export default Component;
