import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.i7ssc3b8h {
  cx: 12px;
  cy: 12px;
  r: 7px;
  fill: currentColor;
  opacity: var(--svg-opacity--0-5, 0.5);
}

.zo3cxx6gk {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19Z");
}
</style><circle class="i7ssc3b8h"/><path clip-rule="evenodd" class="zo3cxx6gk"/>`,
		"fallback": "solar:record-bold-duotone",
	});
}

export default Component;
