import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m_uhtibqv.css';
import '../../css/o/olwq-zbrb.css';
import '../../css/i/ip_4o1ksj.css';
import '../../css/c/cnulnizlp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m_uhtibqv wm-k"/><path class="olwq-zbrb wm-a"/><path class="ip_4o1ksj wm-k"/><path class="cnulnizlp wm-k"/>`,
		"fallback": "withicons-bauhaus:paste",
	});
}

export default Component;
