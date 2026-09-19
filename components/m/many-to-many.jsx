import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/m/m4jss5ybp.css';
import '../../css/t/tnf0mrb5w.css';
import '../../css/b/bf1x1db8j.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGsIJRkcnI"><g class="s9cl3zbei"><path class="m4jss5ybp"/><path class="tnf0mrb5w"/><path class="bf1x1db8j"/></g></mask></defs><path mask="url(#SVGsIJRkcnI)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:many-to-many",
	});
}

export default Component;
