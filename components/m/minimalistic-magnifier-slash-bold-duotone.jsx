import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cl66i7bqg.css';
import '../../css/c/c903nt__c.css';
import '../../css/t/tawopabjo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="cl66i7bqg"/><path class="c903nt__c"/><path class="tawopabjo"/>`,
		"fallback": "solar:minimalistic-magnifier-slash-bold-duotone",
	});
}

export default Component;
