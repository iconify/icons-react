import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/f/fpx-00njb.css';
import '../../css/m/m04ageo3b.css';
import '../../css/h/h80grackm.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGQ8VYnwRN"><g class="s9cl3zbei"><circle class="fpx-00njb"/><path class="m04ageo3b"/><path class="h80grackm"/></g></mask></defs><path mask="url(#SVGQ8VYnwRN)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:lock-one",
	});
}

export default Component;
