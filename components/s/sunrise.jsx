import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xnyax3bwc.css';
import '../../css/v/vlj0scbpf.css';
import '../../css/d/d-2gb0bhq.css';
import '../../css/d/di9898b_k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><clipPath id="SVGJOfocd6M"><path class="xnyax3bwc"/></clipPath><symbol id="SVGYqAb8ZRw" viewBox="0 0 375 375"><circle class="vlj0scbpf"/><path class="d-2gb0bhq"><animateTransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 187.5 187.5; 45 187.5 187.5"/></path></symbol></defs><g clip-path="url(#SVGJOfocd6M)"><use width="375" height="375" href="#SVGYqAb8ZRw" transform="translate(68.5 104.5)"/></g><path class="di9898b_k"/>`,
		"fallback": "meteocons:sunrise",
	});
}

export default Component;
