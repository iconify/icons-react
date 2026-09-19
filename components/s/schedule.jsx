import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gopnm44um.css';
import '../../css/r/rklh0zdmu.css';
import '../../css/p/pab7pn29i.css';
import '../../css/w/wu7k8_ixa.css';
import '../../css/h/h3shtbc9x.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGRMoMLc1A"><g class="gopnm44um"><rect class="rklh0zdmu"/><path class="pab7pn29i"/><path class="wu7k8_ixa"/><path class="h3shtbc9x"/></g></mask></defs><path mask="url(#SVGRMoMLc1A)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:schedule",
	});
}

export default Component;
