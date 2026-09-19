import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/t/toz1dpcji.css';
import '../../css/y/ysw8cmbcj.css';
import '../../css/w/w2xpt4b5w.css';
import '../../css/k/k-2sy8b0k.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGJrUFRl7h"><g class="s9cl3zbei"><rect class="toz1dpcji"/><circle class="ysw8cmbcj"/><path class="w2xpt4b5w"/><path class="k-2sy8b0k"/></g></mask></defs><path mask="url(#SVGJrUFRl7h)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:radio",
	});
}

export default Component;
