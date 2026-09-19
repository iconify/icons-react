import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/z/zlj7xlcek.css';
import '../../css/d/dul_3ubyn.css';
import '../../css/o/ochmb2chu.css';
import '../../css/v/vdcjlilsn.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGypk2ibRQ"><g class="s9cl3zbei"><path class="zlj7xlcek"/><path class="dul_3ubyn"/><path class="ochmb2chu"/><circle class="vdcjlilsn"/></g></mask></defs><path mask="url(#SVGypk2ibRQ)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:no-shooting",
	});
}

export default Component;
