import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/f/fpx-00njb.css';
import '../../css/c/cvij5gvui.css';
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
		"content": `<defs><mask id="SVG2RlOychi"><g class="s9cl3zbei"><circle class="fpx-00njb"/><path class="cvij5gvui"/><path class="h80grackm"/></g></mask></defs><path mask="url(#SVG2RlOychi)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:unlock-one",
	});
}

export default Component;
