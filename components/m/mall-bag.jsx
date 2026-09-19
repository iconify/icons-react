import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/e/ez7docclp.css';
import '../../css/f/fxrnyjbgc.css';
import '../../css/x/xzlilxrec.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGb4mctTCP"><g class="ufeehvblu"><path class="ez7docclp"/><path class="fxrnyjbgc"/><path class="xzlilxrec"/></g></mask></defs><path mask="url(#SVGb4mctTCP)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:mall-bag",
	});
}

export default Component;
