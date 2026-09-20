import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/a/auke2fbew.css';
import '../../css/m/milkvvbfj.css';
import '../../css/u/uq37wbbrx.css';
import '../../css/t/t-cqpe51j.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="auke2fbew"/><circle class="milkvvbfj"/><circle class="uq37wbbrx"/><path class="t-cqpe51j"/></g>`,
		"fallback": "streamline:interface-edit-typewriter-typewriter-company-office-supplies-work",
	});
}

export default Component;
