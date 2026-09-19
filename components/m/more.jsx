import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bct-im56e.css';
import '../../css/t/tqb_6nb6c.css';
import '../../css/m/mykin67du.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="bct-im56e"/><circle class="tqb_6nb6c"/><circle class="mykin67du"/>`,
		"fallback": "icon-park:more",
	});
}

export default Component;
