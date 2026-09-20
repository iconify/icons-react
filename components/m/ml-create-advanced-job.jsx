import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qq9_xubku.css';
import '../../css/x/xdtlmkksx.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qq9_xubku"/><path class="ouiIcon__fillSecondary xdtlmkksx"/>`,
		"fallback": "oui:ml-create-advanced-job",
	});
}

export default Component;
