import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/t/ta62fdbqc.css';
import '../../css/v/vyiw8snfv.css';
import '../../css/w/w-54a5wuc.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGjmFIOcmb"><g class="rohhhzb0l"><rect class="ta62fdbqc"/><path class="vyiw8snfv"/><rect class="w-54a5wuc"/></g></mask></defs><path mask="url(#SVGjmFIOcmb)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:seo",
	});
}

export default Component;
