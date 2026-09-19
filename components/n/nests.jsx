import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/d/dkifpkb7f.css';
import '../../css/i/in8va7fps.css';
import '../../css/l/ljtua8b8a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="dkifpkb7f"/><path clip-rule="evenodd" class="in8va7fps"/><path clip-rule="evenodd" class="ljtua8b8a"/></g>`,
		"fallback": "icon-park-solid:nests",
	});
}

export default Component;
