import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xs81tw52f.css';
import '../../css/w/wnx0jwbvt.css';
import '../../css/k/k-eldqbfz.css';
import '../../css/t/tgvbmnbgb.css';
import '../../css/e/enfa23jcl.css';
import '../../css/e/e4zfowz9r.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd"><path class="xs81tw52f"/><path class="wnx0jwbvt"/></g><path class="k-eldqbfz"/><path class="tgvbmnbgb"/><path class="enfa23jcl"/><path class="e4zfowz9r"/>`,
		"fallback": "openmoji:up-exclamation-button",
	});
}

export default Component;
