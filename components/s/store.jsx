import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cb07q-bxa.css';
import '../../css/j/j3skc-b5v.css';
import '../../css/c/crqmprq7t.css';
import '../../css/e/ejtpq101k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cb07q-bxa wm-k"/><path class="j3skc-b5v wm-a"/><path class="crqmprq7t wm-k"/><path class="ejtpq101k wm-k"/>`,
		"fallback": "withicons-bauhaus:store",
	});
}

export default Component;
