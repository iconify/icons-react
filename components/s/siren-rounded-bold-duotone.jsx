import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/us865h93z.css';
import '../../css/v/vomzvikmg.css';
import '../../css/m/md29iac7z.css';
import '../../css/b/baz-86b8z.css';
import '../../css/o/oi41mr3fe.css';
import '../../css/v/vwazgn8zx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="us865h93z"/><path class="vomzvikmg"/><path class="md29iac7z"/><path class="baz-86b8z"/><path class="oi41mr3fe"/><path class="vwazgn8zx"/>`,
		"fallback": "solar:siren-rounded-bold-duotone",
	});
}

export default Component;
